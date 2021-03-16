import bcrypt from 'bcryptjs'

const users = [
    {
        name: 'Admin User',
        email: 'admin@example.com',
        password:bcrypt.hashSync('123456',10),
        isAdmin: true,
        MobileNumber: 9435221145,
    },
    {   
        name: 'CO1',
        email: 'co1@example.com',
        password:bcrypt.hashSync('123456',10),
        MobileNumber: 9435221145,
     
    },
    {   
        name: 'CO2',
        email: 'co2@example.com',
        password:bcrypt.hashSync('123456',10),
        MobileNumber: 9435221145,
    },
    {
        
        name: 'CO3',
        email: 'co3@example.com',
        password:bcrypt.hashSync('123456',10),
        MobileNumber: 9435221145,
      
    },
    {   
        name: 'CO4',
        email: 'co4@example.com',
        password:bcrypt.hashSync('123456',10),
        MobileNumber: 9435221145,
      
    },
    {  
        name: 'anish',
        email: 'anish@example.com',
        password:bcrypt.hashSync('123456',10),
        MobileNumber: 9435221145,
      
    },
]

export default users