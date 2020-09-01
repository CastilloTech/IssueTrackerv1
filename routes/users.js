app.get('/', (req, res) => {
  res.status(200).json({success:true, msg:"Show all users"});
})
