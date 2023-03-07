// todaysHome_get, todaysCreate_get, todays_post

const todaysDone = require('../models/mongoDB');


const todaysHome_get = (req, res) =>{
  todaysDone.find()
  .then((result) =>{
    res.render('Home', {todayData: result});
  })
  .catch((err) =>{
    console.log({err});
  })
}

const todaysCreate_get = (req, res) =>{
  res.render('Create');
}

// post data to DB //
const todaysCreate_post = async(req, res) =>{
  console.log(req.body);
  let today = await new todaysDone(req.body);
  // saved to DB //
  today.save()
  .then((result) =>{
    res.redirect("/Home");
  })
  .catch((err) =>{
    console.log(err);
  });
}


// delete request //
const todaysDelete_delete =(req, res) =>{
  const id = req.params.id;
  todaysDone.findByIdAndDelete(id)
  .then((result) =>{
    res.json({redirect: "/Home"})
  })
  .catch(err => console.log(err));
}

// redirect //
const todaysRedirect = (req, res) =>{
  res.redirect('/');
}


module.exports = {
todaysHome_get,
todaysCreate_get,
todaysCreate_post,
todaysDelete_delete,
todaysRedirect,
}