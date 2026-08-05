import * as React from 'react';
import HelloComponent from './components/Hello';
import NameEditComponent from './components/NameEditComponent2';
// 像写js一样写ts
const App = () =>{
    const [name,setName] = React.useState<string>("defaultUserName");

    const loadUsername = () => {
        setTimeout(() => {
            setName("name from async call");
        },2000);
    }
    // 副作用
    React.useEffect(()=>{
        // 组件挂载后
        // 组件第一要素是赶快显示出来,让用户觉得快
        loadUsername();
    },[])

    return (
        <>
        名字: {name}
        <HelloComponent username={name} />
        <NameEditComponent
            initialUserName={name}
            onNameUpdated={setName}
        />

        </>
    )
}

export default App;