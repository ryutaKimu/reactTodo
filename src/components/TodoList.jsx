import { Text,Button, Box } from "@chakra-ui/react";
import { memo } from "react";
export const  TodoList = memo((props)=>{
    const {incompleteTodo,completeButton,deleteButton} = props;

    return(
        <>
      {incompleteTodo.map((todo,index)=> 
      <div key={index}>
        <ul>
          <li>
            <Box textAlign="center" mr="20px">
            <Text textDecoration={todo.isStriked ? 'line-through' : "" } lineHeight="4.0rem">
            {todo.text}
            <Button ml="12px" onClick={()=>completeButton(index)}><i className="fas fa-check-square"></i>
            </Button>
            <Button ml="12px" onClick={()=>deleteButton(index)}><i className="fa-solid fa-trash"></i>
            </Button>
            </Text>
            </Box>
            </li>
        </ul>
        </div>
     )}

        </>
    )

})