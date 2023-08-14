import questions from "@/Databases/questions"
import cors from 'cors';

const corsOptions = {
  origin: 'https://alejou343.github.io/prueba-fr/', 
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  credentials: true,
  optionsSuccessStatus: 204,
};

export default function handler(req, res) {
  cors(corsOptions)(req, res, () => {
    res.status(200).json(questions);
  });
}
