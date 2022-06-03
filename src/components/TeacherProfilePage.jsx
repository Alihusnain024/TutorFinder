import styled from "styled-components"
import { FcGraduationCap, FcViewDetails ,FcBusinessman} from "react-icons/fc";
import Footer from "./Footer";
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
width: 60%;
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
flex-direction: row;
padding: 10px,20px;
margin-left: 10px;
`
const Name=styled.div`
font-size: 20px;
margin-top: 20px;
text-align: center;
font-weight: bold;

`
const Image=styled.img`
width: 200px;
height: 200px;
object-fit: cover;
margin-right: 10px;



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




`
const Row=styled.div`
display: flex;
margin-left: 100px;
`
const Column=styled.div`
display: flex;
flex-direction: column;
margin-left: 100px;
`
const Border=styled.div`
height: 10px;
width: 10px;
color: gray;
margin-left: 40px;
`

const TeacherProfilePage = () => {
    return (
        <div>

             <Container>
            <Wrapper>
            <Left>
            <Logo>Tutor Finder</Logo>
            <Menu>
                <MenuItem>My Jobs</MenuItem>
                <MenuItem>DashBoard</MenuItem>
                <MenuItem>Edit Profile</MenuItem>
                
                

            </Menu>
            
            </Left>
            <Button>Go Premium</Button>
            
            
            </Wrapper>
           
        </Container>
        
        <Name>Ali Husnain</Name>
        
        
       
        <BottomContainer>
        
        <Image src=" data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAACACAMAAAD04JH5AAAAMFBMVEXk5ueutLepr7Ln6erg4uPJzc/T1ti7wMO2u77DyMqzuLvq7O3P0tTW2dvc3+DZ3N7ueM45AAAC2UlEQVR4nO2a2ZLjIAxFAYHZvPz/3za2O8v0JCA5kl3dxXly5eXeCAmDZKU6nU6n0+l0Op1O5/cCAErZglofzle3UwxJryTvFnWuB4DJa2P0DWNSnM+zAHnUD/G7Cb/kc/Tz9EJ+t3DKQkB8Lb8xiDsAFSr62jhhB2BTRX51EEUdgK3Lb4kg6qDx/6VjAL6tXxyMUg7A1fLvyYHQngQLTr/szUIGAlJfqBhhxAagIKCvAC+vtUQIBkIAtOE3kNEZsBkQKEVKALQO3AZIKbiGwHIbQG2CTwbYX8w0fa253wgzbQVKEvDqA6kIN5gNIN9DT8y8BiJVXy8XGzATrwFiFa51+McMXL4Elyfh1WVIOw1s8OorS96K/9rL6PLXMfVAorkPJApoBvivqLQ1MBP/oRR9MdsQuBcA4mp+D4DI3WwihEDkdorPAv4j8U67P/ONVJcGvRdYqRZJ9hgHEiV4A9OjkGsRbVTblJu+dKuy4UBcvxRjtVUr3ywup7P38uGUoQHM74Lgzprd5OVFJpgoVv6vLMzu35FNGE+eGq1TqzH6kFIKPg7XDM4y3Mhnz8zK/7XLMLq44cZhmfdfTxDPah5jKKu+ck+B9TlFNynRYKzDSheek+9nIWiT4mBlIlGCPnj9ZmD3bMLo4Gb2kthHpS3xhwk/sFoA5RLxXmLKvsQ1SAVbG1VWPISFIwpF/oj6bsEzWHg1pyZYiJ/lQl6oa/+fAz1+kAr52OL/sJCOBgHm5gEQybFjEgw86nrLBDqZ3herOPDkRKh+pnDAAXV8wKyvqQMMfn2aA9b1fzhA5wFQWhF48N9WkLuiWAfY/YA0pCWBamAfaIyjQTWQ0Y2YA2B6B5k8nCHRDgB5REqi3T6gT6eINNdANADtUpQsgR3fCIDcHnCjPkiQ2gQf1NfgwJSeTPVscmA+SSbVVgD/tdYHVJOAMJQ4TG2ma78bD6LwjtU7nU6n8/v5AuY6HZyRatEhAAAAAElFTkSuQmCC"/>
        <h3 >Hi dear students and learners,
My name is Ali Husnain and I have experience in Web Development, Assembly language MIPS, Python, C++, HTML,CSS,JavaScript,Mathematics (from Algebra to Calculus). I cover and implement everyday topics that range from practical implementation for coding to advance topics in Python and C++. I can help students complete their homework and assignments quiz that are related to their respective computer science and mathematical courses (Web Development, Assembly language MIPS, Python, C++, Mathematics). </h3>
        

           
        </BottomContainer>
        <Border>____________________________________________________________________________________________________________________________</Border>
        <Row>
        
        <Text> <FcGraduationCap size={30} color="green"/>    Subjects</Text>

         
        </Row>
        <Column>
        <Text>Physics</Text>
        <Text>Math</Text>
        <Text>English</Text>
        <Text>Urdu</Text>
        <Text>Programming</Text>
        <Text>Computer</Text>

      

        </Column>
        <Border>____________________________________________________________________________________________________________________________</Border>

        <Row>
        
        <Text> <FcViewDetails size={30} color="green"/>    Experience</Text>

         
        </Row>
        <Column>
            <Text>4 years</Text>
        </Column>
        <Border>____________________________________________________________________________________________________________________________</Border>
        <Row>
        
        <Text> <FcBusinessman size={30} color="green"/>    Education</Text>

         
        </Row>
        <Column>
            <Text>BSCS Gujrat University</Text>
        </Column>
        <Border>____________________________________________________________________________________________________________________________</Border>
        
        <Row>
        
        <Text> <FcViewDetails size={30} color="green"/>Fee Details</Text>

         
        </Row>
        <Column>
            <Text>10 dollar per hour</Text>
        </Column>
        <Footer/>

        </div>
    )
}

export default TeacherProfilePage
