
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

export const Post = () => {
    return (
        <div>
        <Logo>Tutor Finder</Logo>
        <Container>

            

            <Form>
            <Title>Post Your requirements</Title>
                <Lable>location</Lable>
                <Input type="text"/>
                <Lable>detail your requirements</Lable>
                <TextArea/>
                <Lable>Budget</Lable>
                <Input type="number"/>
                <Lable>Subjects</Lable>
                <Input type="text"/>
                <Lable>deadline</Lable>
                <Input type="date"/>
                <Button>Submit</Button>
            </Form>
            
        </Container>
      
            
        </div>
    )
}
