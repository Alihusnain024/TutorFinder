import styled from "styled-components"


const Row=styled.div`
display: flex;
align-items: center;
margin-top: 20px;



justify-content: center;
margin-left: 20px;
`

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(
      rgba(255, 255, 255, 0.5),
      rgba(255, 255, 255, 0.5)
    ),
    url()
      center;
  background-size: contain;
  align-items: center;
  justify-content: center;
  display: flex;
  
  
  position: relative;
`;
const Logo=styled.h1`
font-weight: bold;
text-decoration: underline crimson;

position: absolute;
margin-top: 10px;
margin-left: 20px;
`

const Wrapper = styled.div`
  width: 40%;
  padding: 20px;
  margin-bottom: 150px;
  background-color: lightgray;
 

  
`;

const Title = styled.h1`
  font-size: 24px;
  font-weight: 300;
  font-weight: bold;
 
`;
const RadioTitle=styled.h5`
margin-left: 10px;
margin-right: 10px;


`

const Form = styled.form`
  display: flex;
  flex-wrap: wrap;
`;

const Input = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 20px 10px 0px 0px;
  padding: 10px;
`;

const Agreement = styled.span`
  font-size: 12px;
  margin: 20px 0px;
`;

const Button = styled.button`
  width: 20%;
  border: none;
  padding: 15px 20px;
  background-color: crimson;
  color: white;
  cursor: pointer;
  margin-left: 10px;
  border-radius: 10px;
  
  
`;

const Register = () => {
    return (
      <div>
      <Logo>Tutor Finder</Logo>



        <Container>
       
        
            <Wrapper>
            <Title>CREATE AN ACCOUNT</Title>
       
        <Form>
          
          <Input placeholder="username" />
          <Input placeholder="email" />
          <Input placeholder="password" />
          <Input placeholder="confirm password" />
          <Agreement>
            By creating an account, I consent to the processing of my personal
            data in accordance with the <b>PRIVACY POLICY</b>
          </Agreement>
          
          <input type="radio" id="html" name="fav_language" value="STUDENT"></input><br/>
          <RadioTitle>Student</RadioTitle>
         
          <input type="radio" id="html" name="fav_language" value="TEACHER"></input>
          <RadioTitle>Teacher</RadioTitle>
          <Button>CREATE</Button>
        </Form>
      </Wrapper>
        </Container>
        </div>
    )
}

export default Register
