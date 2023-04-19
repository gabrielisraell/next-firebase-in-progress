import Client from "@/core/Client";
import Input from "./Input";
import { useState } from "react";
import Button from "./Button";

interface FormProps {
    client: Client
    clientChange?: (client: Client) => void
    canceled?: () => void
    

}
export default function Form(props: FormProps) {
    const id = props.client?.id
    const[name, setName] = useState(props.client?.name ?? '')
    const[age, setAge] = useState(props.client?.age ?? 0)
    return(
        <div>
            {id? (
                <Input 
                readOnly
                text="code" 
                value={id}
                className="mb-5"
                 />
            ) : false}
            <Input 
            text="name" 
            value={name} 
            onChange={setName}
            className="mb-5"
            />

            <Input 
            text="Age" 
            type="number" 
            value={age} 
            onChange={setAge}
            />
            <div className="flex justify-end mt-7">
                <Button cor="blue" className="mr-2"
                onClick={() => props.clientChange?.(new Client(name, +age, id))}>
                    {id ? 'Update' : 'Save'}
                </Button>
                <Button onClick={props.canceled}>
                    Cancel
                </Button>
            </div>
        </div>
    )
}