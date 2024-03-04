const bcrypt = require('bcrypt')
const Admin = require('../Models/adminModel')


const adminRegister = async (req, res) => {
    try{
        const { email, password, username} = req.body
        const existingAdmin = await Admin.findOne({ email})
        if(existingAdmin){
            return res.status(404).json({ success: false,  message: 'Admin already Registered' })
        }
        const hashPassword = await bcrypt.hash(password, 10)
        const newAdmin = Admin({
            email,
            password : hashPassword,
            username
        })
        const savedAdmin = await newAdmin.save()
        res.status(200).json({ success: true, message: 'Admin created', savedAdmin })
    }
    catch(err){
        console.log(err.message)
    }
     
}

const adminLogin = async (req, res) => {
    try{
    const {email, password}= req.body
    const admin = await Admin.findOne({email})

    if (!admin) {
        return res.status(404).json({ success: false, message: 'Admin not found' })
    }
    const checkAdminPassword = await bcrypt.compare(password, checkAdminUser.password)
    if (!checkAdminPassword) {
      return res
        .status(401)
        .json({ success: false, message: 'Invalid Password' })
    }

    jwt.sign(
        { id: admin._id },
        process.env.SECRET,
        { expiresIn: '1hr' },
        async (err, token) => {
          if (err) {
            throw err
          }
          res.cookie('userId', admin._id, { maxAge: period, httpOnly: true })
          res.status(200).json({
            success: true,
            message: 'Admin Login Successfully',
            admin,
            token
          })
        }
      )

} catch (error) {
    console.error(error);
    return res.status(500).json({ success: false, message: 'Internal Server Error' });
}

}

module.exports = {adminLogin, adminRegister}