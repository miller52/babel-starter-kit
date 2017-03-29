import express from 'express';
import cors from 'cors';

const app = express();
app.use(cors());
app.get('/', (req, res) => {
  let data = {};

  if(data){
    res.json({
      hello: 'JS World',
    });
  }else{
    res.send('Error');
  }
});

app.listen(3000, () => {
  console.log('Your app listening on port 3000!');
});
