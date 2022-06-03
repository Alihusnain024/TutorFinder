
import styled from "styled-components"
import { FcGraduationCap, FcViewDetails ,FcBusinessman} from "react-icons/fc";
import { GoLocation, GoCalendar } from "react-icons/go";


const Container=styled.div`
height: 80px;
background-color: lightgrey;

`
const Wrapper=styled.div`
padding: 20px 20px;
display: flex;
justify-content: space-between;
align-items: center;
`
const Left=styled.div`
width: 100%;
display: flex;
align-items: center;
justify-content: space-between;
`
const Logo=styled.h1`
font-weight: bold;
text-decoration: underline crimson;
`
const Menu=styled.ul`
display: flex;
align-items: center;
justify-content: space-between;
list-style: none;
`
const MenuItem=styled.li`
margin-right: 30px;
font-size: 20px;
font-weight: bold;

`
const Button=styled.button`
border: 2px solid ;
padding: 10px 15px;
background-color: crimson;
color: white;
font-weight: bold;
border-radius: 10px;
cursor: pointer;
`
const BottomContainer=styled.div`

margin-top: 50px;
display: flex;
align-items: center;
justify-content: center;
flex-direction: column;

`

const PostButton=styled.button`
border: 2px solid ;
padding: 10px 15px;
background-color: crimson;
color: white;
font-weight: bold;
border-radius: 10px;
cursor: pointer;
margin-top: 20px;

`
const Text=styled.h1`
font-size: 20px;
margin-top: 20px;
margin-right: 10px;


`
const FindTeachersButton=styled.button`
border: 2px solid ;
padding: 10px 15px;
background-color: green;
color: white;
font-weight: bold;
border-radius: 10px;
cursor: pointer;
margin-top: 20px;
`
const Input=styled.input`
flex: 1;
  min-width: 100%;

  padding: 10px;


`
const SearchContainer=styled.div`
display: flex;
margin-top: 10px;
margin-bottom: 20px;

`
const ViewPostContainer=styled.div`

width: 40%;
height: 200px;
padding: 20px;
  margin-left: 20px;
  background-color: lightsalmon;
  margin-top: 20px;

`
const Tags=styled.div`
width: 15%;
height: 20px;
background-color: lightgrey;
border-radius: 10px;
padding: 5px,5px;
text-align: center;
margin-top: 5px;
`
const Desc=styled.h5`

font-size: 15px;
margin-top: 10px;

`
const Row=styled.div`

display:flex;
margin-left: 10px;
`




export const StudentPosts = () => {
    return (
        <div>
        <Container>
            <Wrapper>
            <Left>
            <Logo>Tutor Finder</Logo>
            <Menu>
                <MenuItem>My Posts</MenuItem>
                <MenuItem>Find Tutors</MenuItem>
                <MenuItem>Reviews</MenuItem>
                
                

            </Menu>
            
            </Left>
            
            
            
            </Wrapper>
        </Container>
        <BottomContainer>
        <Text>My Posts</Text>
       
        <ViewPostContainer>
        <Text>
            Online C++ teacher required in Lahore
        </Text>
        <Tags>C++</Tags>
        <Desc>I need an C++ tutor to help me in solving some questions.Please Contact me as soon as possible</Desc>

        <Row>
        <Text> <GoCalendar/>  10 mins ago</Text>
        <Text> <GoLocation/>  Lahore</Text>




        </Row>





        </ViewPostContainer>
      


           
        </BottomContainer>
  


            
        </div>
    )
}
