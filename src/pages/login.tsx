import * as React from 'react';
import axios from 'axios';

import  {Form, minLength,required,ISubmitResult,IValues } from './../components/Form';
interface IProps{
    onSubmit:(values:IValues) => Promise<ISubmitResult>;
}

const Login: React.SFC<IProps> = (props) => {
   const handleSubmit = async (values:IValues):Promise<ISubmitResult> =>{       
       const result = await props.onSubmit(values);
       return result;
   }
    return (
        <Form defaultValues={{ username: '', password: '' }}
            validationRules={{
                username: { validator: required },
                password: [{ validator: required }, { validator: minLength, arg: 3 }]
            }}
            onSubmit={handleSubmit}
        >
            <Form.Field name="username" label="用户名" />
            <Form.Field name="password" label="密码"  />
        </Form>
    );
}



interface IState {
    username: string;
    password: string;
}



class LoginPage extends React.Component<{}, IState>{
    constructor(props: {}) {
        super(props);
        this.state = {
            username: '',
            password:''
        }
    }


    private handleSubmit = async (values: IValues): Promise<ISubmitResult> => {
       
        axios.post('/user/login',{
            uname:values.username,
            pass:values.password,
        }).then((response)=>{
            console.log(response.data);
        }).catch((error)=>{
            console.log(error);
            
        });

        return {
            // errors: {
            //     email: ["Some is wrong with this"]
            // },
            // success: false
            success:true
        };
    };
    public render() {
        return (
            <div className="page-container">
                <h1>login in</h1>
                <Login onSubmit={this.handleSubmit} />
            </div>
        )
    }
}



export default LoginPage;