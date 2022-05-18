{
    groupsOpenGet {
      id
      name
      iAmAdmin
      iAmMember
      description
      createdAt
      updatedAt
      createdByUser {
        email
        givenName
        familyName
        company
  
      }
      members {
        role
        joinedDate
        latestActivity
        user {
          email
          givenName
          familyName
    
        }
  
      }
      pendingInvitations {
        createdAt
        email
        invitedByUser {
          email
          givenName
          familyName
    
        }
  
      }
      settings {
        chat
        isPublic
        isOpen
        showUsers
        showScores
        showSummaries
        addStartup
        addUser
        addEvaluation
  
      }
      evaluationTemplates {
        ...evaluationTemplateFields
        sections {
          ...evaluationTemplateSectionFields
          questions {
            ...evaluationTemplateQuestionFields
      
          }
    
        }
  
      }
      startups {
        createdAt
        seen
        isInMyDealFlow
        sharedByUser {
          email
          givenName
          familyName
    
        }
        creative {
          id
          name
    
        }
        connection {
          id
    
        }
        subjectiveScores {
          score
          createdAt
          isMe
          createdByUser {
            email
            givenName
            familyName
      
          }
    
        }
        log {
          id
          groupId
          creativeId
          createdByUser {
            email
            familyName
            givenName
      
          }
          createdAt
          updatedAt
          logType
          notifyUsers
          reference {
            key
            val
      
          }
          dataPairs {
            key
            val
      
          }
          creative {
            id
            name
      
          }
          seen
          seenBy {
            familyName
            givenName
            email
      
          }
    
        }
        evaluationSummaries {
          templateId
          templateName
          submissions
          averageScore
          possibleScore
          averagePercentageScore
          highestScore
          lowestScore
    
        }
        evaluations {
          ...evaluationV2Fields
    
        }
  
      }

    }
  }
  
  fragment evaluationTemplateFields on EvaluationTemplate {
    id
    name
    description
    createdBy
    createdAt
    updatedAt
    possibleScore
    __typename
  }
  
  fragment evaluationTemplateSectionFields on EvaluationTemplateSection {
    id
    createdAt
    updatedAt
    createdBy
    name
    description
    evaluationTemplateId
    templateName
    possibleScore
    __typename
  }
  
  fragment evaluationTemplateQuestionFields on EvaluationTemplateQuestion {
    id
    createdBy
    accountId
    createdAt
    updatedAt
    name
    description
    inputType
    questionOptions {
      name
      score
      index
      id

    }
    __typename
  }
  
  fragment evaluationV2Fields on Evaluation {
    id
    createdAt
    updatedAt
    createdByUser {
      email

    }
    evaluationTemplateId
    template {
      id
      name

    }
    answers {
      questionOption {
        name
        id
        question {
          name
          id
          section {
            id
            name
      
          }
    
        }
        inputType
  
      }
      name
      id

    }
    createdByUser {
      email
      givenName
      familyName
      isMe

    }
    createdByUser {
      email

    }
    summary {
      templateName
      sections {
        sectionId
        sectionName
        scorePercent
        scoreTotal
        scorePossible
        scorePerAnswer {
          score
          possibleScore
          questionId
          questionName
          answer
    
        }
  
      }
      scoreTotal
      scorePossible
      scorePercent

    }
    __typename
  }
  