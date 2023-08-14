import questions from "@/Databases/questions"
import cors from 'cors';

const corsOptions = {
  origin: 'http://127.0.0.1:5500', // Cambia esto por la URL correcta de tu aplicación en localhost
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  credentials: true,
  optionsSuccessStatus: 204,
};

export default function handler(req, res) {
  cors(corsOptions)(req, res, () => {
    res.status(200).json(questions);
  });
}
