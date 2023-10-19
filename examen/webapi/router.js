import express from 'express';

const app = express();
const router = express.Router();

let data = [];

// returns the list of items 
router.get('/', (req, res) => {
   res.json(data);
});

// add an item to the list
router.post('/', (req, res) =>{
   if (data.length > 0) {
      data.push({
         id: data[data.length-1].id + 1,
         name: req.body.name,
      });
   } else {
      data.push({
         id: 1,
         name: req.body.name,
      });
   }
   res.json({ message: "Record Added" });
});

// update an item in the list
router.put("/:id", (req, res) => {
   const id = Number.parseInt(req.params.id);
   for (let i = 0; i < data.length; i++) {
      if (data[i].id === id) {
         data[i] = {
            id: id, 
            name: req.body.name,
         };
         break;
      }
   }
   res.json({ message: "Record Updated" });
});

// delete item 
router.delete("/:id", function (req, res) {
   var id = Number.parseInt(req.params.id);
   let newData = [];
   for (let i = 0; i < data.length; i++) {
      if (data[i].id !== id) {
         newData.push({ ...data[i] });
      }
   }
   data = [ ...newData];
   res.json({ message: "Record Deleted" });
});

export default router;