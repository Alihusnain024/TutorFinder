
import styled from "styled-components"
const Logo=styled.h1`
font-weight: bold;
text-decoration: underline crimson;

margin-top: 10px;
margin-left: 20px;
`
const Container = styled.div`
  width: 100vw;
  
  
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Title=styled.h1`
font-size: 30;
font-weight: bold;
margin-top: 30px;
margin-bottom: 20px;

`
const Lable=styled.h5`

`
const Form=styled.form`


`
const Input=styled.input`
flex: 1;
  min-width: 40%;

  padding: 10px;


`
const TextArea=styled.textarea`
 width: 400px;
  height: 100px;
  padding: 20px;


`
const Button=styled.button`
border: 2px solid ;
padding: 10px 15px;
margin-left: 20px;
background-color: crimson;
color: white;
font-weight: bold;
border-radius: 10px;
cursor: pointer;
`



const TeacherProfileForm = () => {
    return (
        <div>
        <Logo>Tutor Finder</Logo>
        <Container>

            

            <Form>
            <Title>Enter Your Details </Title>
                <Lable>Name</Lable>
                <Input type="text"/>
                <Lable>Description</Lable>
                <TextArea></TextArea>
                <Lable>Gender</Lable>
                
                <select id="gender" name="gender">
    <option value="Male">male</option>
    <option value="Femail">femail</option>
   
  </select>
  
  <Lable>Date of birth</Lable>
  <Input type="date"/>
  <Lable>Location</Lable>
  <Input type="text"/>
  <Lable>Phone No</Lable>
  <Input type="tel"/>
  <Lable>Institution name</Lable>
  <Input type="text"/>
  <Lable>Education</Lable>
  <Input type="text"/>
  <Lable>Teaching Experience</Lable>
  <Input type="text"/>
  <Lable>Fee</Lable>
  <Input type="number"/>
  <Button>Submit</Button>
                
            </Form>
           
            
        </Container>
      
            
        </div>
    )
}

export default TeacherProfileForm
