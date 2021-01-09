// ipedago GQL schema file 
// I will try to make this using the prima schema that was created via introspect
// copy model ... search and replace model with type
export const typeDefs = `

type User {
    id :             Int!
    created_at :     DateTime
    email :          String
    lastNodeActivity :                            DateTime
    password :       String
    resetpwexpire :  DateTime
    resetpwtoken :   String
    totalSpace :     Int
    uniqueKey :      String
    updated_at :     DateTime
    usedSpaceDoc :   Int 
    usedSpaceImg :   Int 
    usedSpaceVid :   Int 
    activeNode_id :  Int 
    avatar_file_id : Int 
    forcePasswordChange      :                    Int 
    invalidLoginAttempts      :                   Int 
    firstTimeUser :  Int 
    isBlocked :      Int 
    lastSeen :       DateTime 
    isLocked :       Int 
    lastCheckWithRecurly       :                  DateTime 
    organization_id : Int 
    displayQuickStart           :                 Int 
        

  }


`;// node :           node        
    // s3file_s3fileTouser_avatar_file_id:  s3file 
    // organization :   organization             
    // chat :           chat[]
    // chatmessage :    chatmessage[]
    // chatuser :       chatuser[]
    // comment :        comment[]
    // discussion :     discussion[]
    // discussionuser : discussionuser[]
    // paypaltransaction                      :      paypaltransaction[]
    // privatezone_privatezone_owner_idTouser:       privatezone[]            
    // privatezone_privatezone_primaryUser_idTouser: privatezone[]            
    // privatezoneuser :privatezoneuser[]
    // project_project_from_idTouser        :        project[]                 
    // project_project_user_idTouser       :         project[]                  
    // project_view_permissions           :          project_view_permissions[]
    // quiz :           quiz[]
    // quizcard :       quizcard[]
    // s3file_s3file_user_idTouser                  s3file[]                   
    // s3folder :       s3folder[]
    // todo_todo_createdByUser_idTouser :             todo[]                    
    // todo_todo_user_idTouser           :           todo[]              