import { useGetAllSemestersQuery } from "../../../redux/features/admin/academicManagement.api";

const AcademicSemester = () => {
  const { data } = useGetAllSemestersQuery(undefined);
  console.log(data);
  return <div></div>;
};

export default AcademicSemester;
