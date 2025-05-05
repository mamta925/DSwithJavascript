const STATE = {
    FULLFILLED: "fulfilled",
    PENDEING: "pending",
    REJECTED: "rejected"
}

class MyPromise {

    #thenCbs = [];
    #catchCbs = []
    #value
    #state
    #onSuccessBind = this.#onSuccess.bind(this)
    #onFailBind = this.#onFail.bind(this)
    constructor(cb){
        try{
            this.#state = STATE.PENDEING
            cb(this.#onSuccessBind, this.#onFailBind)
        }catch(e){
            this.#onFail(e)
        }
    }
    #runCallbacks(){

        if(this.#state === STATE.FULLFILLED) {

            this.#thenCbs.forEach(callback => {
                callback(this.#value)
              })
        
              this.#thenCbs = []

        }

        if(this.#state === STATE.REJECTED) {

            this.#catchCbs.forEach(callback => {
                callback(this.#value)
              })
        
              this.#catchCbs = []
            
        }

    }
    #onSuccess(value){
        queueMicrotask(() => {
            if(this.#state !== STATE.PENDEING) return;

            if (value instanceof MyPromise) {
                value.then(this.#onSuccessBind, this.#onFailBind)
                return
            }

            this.#value = value;
            this.#state = STATE.FULLFILLED

            this.#runCallbacks()
    })

    }
    #onFail(value){
        queueMicrotask(() => {
            if(this.#state !== STATE.PENDEING) return;


            if (value instanceof MyPromise) {
                value.then(this.#onSuccessBind, this.#onFailBind)
                return
            }
            if (this.#catchCbs.length === 0) {
                throw new UncaughtPromiseError(value)
              }

            this.#value = value
            this.#state = STATE.REJECTED


            this.#runCallbacks();
      })
    }
    then(thenCb, catchCb){
        return new MyPromise((resolve, reject) => {
            this.#thenCbs.push(result => {
              if (thenCb == null) {
                resolve(result)
                return
              }
      
              try {
                resolve(thenCb(result))
              } catch (error) {
                reject(error)
              }
            })
      
            this.#catchCbs.push(result => {
              if (catchCb == null) {
                reject(result)
                return
              }
      
              try {
                resolve(catchCb(result))
              } catch (error) {
                reject(error)
              }
            })
      
            this.#runCallbacks()
          })


    }
    catch(cb){

      return this.then(undefined, cb)
    }

    finally(cb){
        return this.then(
            result => {
              cb()
              return result
            },
            result => {
              cb()
              throw result
            }
          )

    }
    static resolve(value) {
        return new MyPromise(resolve => {
          resolve(value)
        })
      }
    
      static reject(value) {
        return new MyPromise((resolve, reject) => {
          reject(value)
        })
      }

}

class UncaughtPromiseError extends Error {
    constructor(error) {
      super(error)
  
      this.stack = `(in promise) ${error.stack}`
    }
  }

module.exports = MyPromise;