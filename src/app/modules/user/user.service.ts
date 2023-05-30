import { IUser } from "./user.interface";
import { User } from "./user.model";


export const createUserToDb=async(payload: IUser):Promise<IUser>=>{
      const createUser = new User(payload); // User -> class user -> instance
        return  await createUser.save();   //build in  instace methods  not custom instance methods
       
  }
  

export const getUserFromDb=async():Promise<IUser[]>=>{
  
      return  await User.find({});

}


export const getUserByIdFromDb=async(payload:string):Promise<IUser| null>=>{
const user= await User.findOne({id:payload},{name:1,contactNo:1});
return user
}

export const getAdminUsersFromDb=async()=>{
    

     const admins= await User.getAdminUsers();
     return admins;
      }


      // Class -> Attach -> metthods -> directly using Class

