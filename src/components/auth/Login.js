import axios from "axios"
import { useState } from "react"
import { useForm } from "react-hook-form"
import { Alert, Card } from "react-bootstrap"

const Login = () => {
    const { register, handleSubmit, errors } = useForm()

    const url = "http://afb.northeurope.cloudapp.azure.com:93/api/v1/Auth/login"
    const [fail, setFail] = useState(false)

    const onSubmit = (data) => {
        axios.post(url, {
            username: data.username,
            password: data.password
        })
            .then((res) => {
                localStorage.setItem("token", res.data.user.token.accessToken)
                window.location.reload()
            })
            .catch(() => {
                setFail(true)
                setTimeout(() => {
                    setFail(false)
                }, 3000);
            })
    }

    return (
        <>
            {fail && <Alert variant="danger">E nemore</Alert>}
            <Card className="mx-auto p-4 mt-4 bg-dark text-light" style={{ width: '18rem' }}>
                <form onSubmit={handleSubmit(onSubmit)}>
                    {errors.username && <p>{errors.username.message}</p>}
                    <div>
                        <label>Username</label>
                        <input type="text" name="username"
                            ref={register({
                                pattern: { value: /^[A-Za-z-0-9]+$/i, message: "Invalid sign" },
                                required: { value: true, message: "Required" },
                                minLength: { value: 3, message: "Too short" },
                                maxLength: { value: 20, message: "Too long" }
                            })} />
                    </div>
                    <div>
                        <label>Password</label>
                        <input type="password" name="password"
                            ref={register({
                                required: { value: true, message: "Required" },
                                minLength: { value: 3, message: "Too short" },
                                maxLength: { value: 20, message: "Too long" }
                            })} />
                    </div>
                    <input type="submit" />
                </form>
            </Card>
        </>
    );
}

export default Login;