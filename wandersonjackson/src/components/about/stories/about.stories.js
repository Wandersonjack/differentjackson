import React from "react"
import { storiesOf } from "@storybook/react"
import About from '../about'
import me from '../../images/me.JPG'


const stories = storiesOf("V1|Components/About", module)
stories.add("About",() =>
   <About 
   imgncolor="verde app_img"
   button="btn-base laranja"
   aboutme="I'm Wanderson Jackson, Product & Interaction Design specialist, with a background in User  Research, and Interface Design."
   myname="Wanderson Jackson"
   />
)