import { z } from "zod";

export const academicSemesterSchema = z.object({
  name: z.string({ required_error: "Please select the name" }),
  year: z.string({ required_error: "Please select the year" }),
  startMonth: z.string({ required_error: "Please select the startMonth" }),
  endMonth: z.string({ required_error: "Please select the endMonth" }),
});
