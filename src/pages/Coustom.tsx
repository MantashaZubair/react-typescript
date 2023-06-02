import React,{useState} from 'react'
interface ISTATE{
    name:String
    title:String,
    
}
interface IPROPS{
    name:String,
    title:String,
    age?:Number /// option when i use ?
}
const Coustom:React.FC<IPROPS> = ({name,title}) => {
    const [ state ,setState] = useState<ISTATE>({name:"mantasha", title:"mernStack"})
  return (
    <div>Coustom
        <h1> Name:{name}</h1>
        <h1> title:{title}</h1>
        <h4>{state.name}</h4>


    </div>
  )
}

<Coustom  name="mantasha" title="zubair"/>

export default Coustom