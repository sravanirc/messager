import { Message } from "../model/message.model.js";
export const getAllMessages = async (req, res) => {
  try {
    const allMessages = await Message.find({});

    res.status(200).json(allMessages);
  } catch (error) {
    res.status(500).send("Error while fetchign all messages");
  }
};

export const createNewMessage = async (req, res) => {
  try {
    const newMessage = req.body;
    const createdMessage = await Message.create(newMessage);
    res.status(200).json(createdMessage);
  } catch (error) {
    res.status(500).send("error createing new message");
  }
};

export const deleteAMessage = async (req, res) => {
  const { id } = req.params;
  try {
    const reply = await Message.findByIdAndDelete(id);
    res.status(200).send("message deleted");
  } catch (error) {
    res.status(500).send(`unabel to delete message with ${id}, ${error}`);
  }
};

export const editMessage = async (req, res) => {
  console.log(req);
  const { id } = req.params;
  const newMessage = req.body;
  try {
    const reply = await Message.findOneAndUpdate({ _id: id }, newMessage);
    console.log("reply: ", reply);
    res.status(200).send("Success, message edited");
  } catch (error) {
    res.status(500).send("Error occured, unable to edit message");
  }
};

export const editMessageByTime = async (req, res) => {
  const { user } = req.params;
  const newMessage = req.body;

  try {
    console.log("User parameter:", user);
    const reply = await Message.findOneAndUpdate({ user: user }, newMessage, {
      new: true,
    });

    res.status(200).send("success in editing");
  } catch (e) {
    console.log(e);
    res.status(500).send("Error in updating");
  }
};
