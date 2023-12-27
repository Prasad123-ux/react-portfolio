import React from 'react'
import './skill.css'
import { CircularProgress, CircularProgressLabel, Grid, GridItem } from '@chakra-ui/react'


export default function Skill() {

const skill=["HTML","CSS", "JAVASCRIPT", "REACT", "CHAKRA UI", "BOOTSTRAP", "NODE JS", "WORDPRESS", "RESPONSIVE DESIGN", "PYTHON", "MONGO DB"]
const color=['red', "blue", 'yellow', 'pink',"chocolate", "pink.400"]
const percentage=['90%',"80%", "80%","70%", "75%","70%", "65%", "60%", "80%", "75%", "60%" ]
  return (
    <div className='skill'>
      <h2>Skill</h2>
<Grid templateColumns={{
    base: 'repeat(2, 2fr)',
    sm: 'repeat(2, 2fr)',
    md: 'repeat(4, 2fr)',
    lg: 'repeat(5, 2fr)',
  }} gap={'5'}>
{
  skill.map((item, index)=>{
    return <GridItem key={index} > <CircularProgress    value={95} mt={{ base: '50px', sm: '80px', md: '150px', lg: '300px' }} color={color[index]}>
    <CircularProgressLabel >{percentage[index]}</CircularProgressLabel>
  </CircularProgress>
  <h2>{item}</h2> </GridItem>
  })
}
</Grid>
 </div>
  )
}
