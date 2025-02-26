import mongoose from 'mongoose';

export const dbConnect = async() => {
  await mongoose.connect('mongodb+srv://arjunsaseendran:8Xng5DGmiJl7liL9@cluster.qtyr4.mongodb.net/aggre?retryWrites=true&w=majority&appName=Cluster').then(() => console.log('MongoDB connection successfull!')).catch(error => console.log(error));
}

