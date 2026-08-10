import { useState } from "react";

function RegisterForm() {
    // vue ref 简单数据类型 /reactive 对象 两种响应式API
    const [form, setForm] = useState({
        username: "",
        password: "",
    })

    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = () => {
        console.log("提交表单:", form);
    }

    return(
        <>
        <div>
            <input
            name="username"
            value={form.username}
            onChange={handleChange}
            placeholder="请输入用户名"
            type="text" />
            <input
            name="password"
            value={form.password}
            onChange={handleChange}
            placeholder="请输入密码"
            type="password" />
            <button type="submit" onClick={handleSubmit}>提交</button>
        </div>
        </>
    )
}

export default RegisterForm
