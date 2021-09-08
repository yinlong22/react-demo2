import React from "react";
import {MathComponent} from 'mathjax-react'

class Index extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <>
                <div style={{color:"red",fontSize:'60px'}}><MathComponent tex={String.raw`a^{2}∙a^{3}=a^{6}`}/></div>
                <MathComponent tex={String.raw`x = {-b \pm \sqrt{b^2-4ac} \over 2a}`}/>
                <MathComponent tex={String.raw` \left(-2a^{2}\right)=-8a^{6}`}/>
                <MathComponent tex={String.raw` 9℃`}/>
                <MathComponent
                    tex={String.raw` (-2)^{-2}-|\sqrt{3}-2|+(-\frac{\sqrt{3}}{2})^{0}-\sqrt[3]{8}-2cos⁡30^{∘}`}/>
                <MathComponent tex={String.raw` =\frac{1}{4}-2+\sqrt{3}+1-2-2×\frac{\sqrt{3}}{2}`}/>
                <MathComponent tex={String.raw` =-2\frac{3}{4}`}/>


                <div style={{margin: 60}}> --懒加载后--</div>


                <img src="https://texmath.bookln.cn/cgi-bin/math.cgi?a^{2}∙a^{3}=a^{6}" alt=""/>
                <div/>
                <img src="http://chart.googleapis.com/chart?cht=tx&chl=\Large x=\frac{-b\pm\sqrt{b^2-4ac}}{2a}" alt=''/>
                <div/>
                <img
                    src="http://chart.googleapis.com/chart?cht=tx&chl=\Large (-2)^{-2}-|\sqrt{3}-2|+(-\frac{\sqrt{3}}{2})^{0}-\sqrt[3]{8}-2cos⁡30^{∘}"
                    alt=''/>
            </>
        )
    }
}

export default Index