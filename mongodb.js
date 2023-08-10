const mongoose=require("mongoose")
mongoose.connect("mongodb://localhost:27017/back")
.then(()=>{
    console.log("mongodb connected");
})
.catch(()=>{
    console.log("failed");

})
const LogInSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    }
})
const quizSchema = new mongoose.Schema({
    title: String,
    questions: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Question' }]
});

const questionSchema = new mongoose.Schema({
    question_text: String,
    options: [{ option_text: String, is_correct: Boolean }]
});

const scoreSchema = new mongoose.Schema({
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    quiz: { type: mongoose.Schema.Types.ObjectId, ref: 'Quiz' },
    score: Number
});


const Quiz =new mongoose.model('Quiz', quizSchema);
const Question =new mongoose.model('Question', questionSchema);
const Score = new mongoose.model('Score', scoreSchema);
const collection=new mongoose.model("Collection1",LogInSchema)
module.exports={collection, Quiz, Question, Score };
