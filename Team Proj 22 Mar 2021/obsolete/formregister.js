// Authors:

module.exports.registerpost = (req, res)=>{
    // console.log('First name:', req.body.fname);
    // if(req.path === '/register'){
    //     console.log('This is the POST method for registerdata');
    //     console.log(req.body);
    //     console.log('Email:', req.body.email);
    //     console.log('Password:', req.body.password);
    //     console.log('checkb:', req.body.checkb);
    // }
    // res.redirect(`/responsepage?value0=Thank You&` +
    //     `value1=Registration complete.&value2=<a href="/">Go to Home page.</a>`);
    const mycontactinfo = req.body.email;
    res.render('thankyou', {heading1:'Thank You for registering with us.', 
        par1:'Registration complete.',
        par2:"a(href='/') Go to Home page.",
        title:mycontactinfo});
 }