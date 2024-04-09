import { memo } from "react";
import {Input,Button } from "@chakra-ui/react";
import {FormControl,} from '@chakra-ui/react'

export const InputTodo = memo((props)=>{
    const {text,handleChange,onClickAdd} = props;
    return(
    <>
    <FormControl w="100%"textAlign="center" mt="5%">
    <Input type='text' placeholder='Todoを入力してください' w="18.8%" minW="32%" mt={30} ml="20px" value={text} onChange={handleChange}/>
     <Button ml="12px" onClick={onClickAdd}><i className="fa-solid fa-square-plus"></i></Button>
     </FormControl>
     </>
    )

});