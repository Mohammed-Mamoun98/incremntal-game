import { Option, Question } from "../models/Question";
import { v4 as uuid } from "uuid";

export const createOptions = (titles = [], correctIndex = 0) => {
  return titles.map(
    (title, i) => new Option(title, uuid(), correctIndex === i)
  );
};

export const optionsTitles = ["Washington Dc", "Canada", "Texas", "NW"];
const first_Q_Options = createOptions(optionsTitles, 0);

export const firstQuestion = new Question("What is the Capital of US");

// export const questions =
