let bookObj=[
    {id:100,book:"math in real life"},
    {id:200,book:"Science Fiction"},
    {id:300,book:"Calculus"},
    {id:400,book:"DSA"},
    {id:600,book:"cost accounting"},
    {id:700,book:"IT"}
]



const BookControllers={
    GetAll:(req,res)=> {
        res.json({
            message:"Data Found",
            status:true,
            data:bookObj,
        })},
    GetOne:(req,res)=> {
        const {id} =req.params;
        if(id){
            bookObj.map((e,i)=>{
                if(e.id==id){
                    res.json({
                        message:"Data Found",
                        status:true,
                        data:e,
                    })
                }
            })
            
                res.json({
                    message:"No data Found",
                    status:false,
                })}
    },
    Update:(req,res)=>{
        const {book} = req.body;
        const {id}=req.params;
        if(id){
            bookObj.map((e,i)=>{
                if(e.id==id){
                    e.book=book;
                    res.json({
                        message:"Data Updated",
                        status:true,
                        data:e,
                    })
                }
            })
            res.json({
                message:"No data updated",
                status:false,
            })}
    }, 
    Add:(req,res)=>{
    console.log(req.body)
    bookObj=[...bookObj , req.body]
    res.json({
        message:"Data Updated",
        status:true,
        data:bookObj,
    })
    },
    Delete:(req,res)=>{
    const {id}=req.params;
    if(id){
        bookObj.map((e,i)=>{
            if(e.id==id){
                bookObj.splice(i,1)
                bookObj=[...bookObj]
                res.json({
                    message:"Data Deleted",
                    status:true,
                    data:bookObj,
                })
            }
        })
        
            res.json({
                message:"No data Deleted",
                status:false,
            })}
    }
}

module.exports = BookControllers;