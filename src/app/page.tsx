
import ClientComponent from "./clientside";
import { LoginAction } from "./loginAction";
export default async function  Home() {
  
  const HelloWorldAction = async () => {
      "use server"
      console.log("hello world")
  }


  await (()=> {
    return new Promise<void>((res) => {
      setTimeout(()=> {
        res()
      }, 2000)
    })
  })()


  return (
   <>
    <h1>Home page</h1>
    <form action={LoginAction}>
        <input type="email" name="email" id="" />
        <input type="password" name="password" id="" />
        <button type="submit">Giriş</button>
    </form>

    <br />
    <ClientComponent helloWorldAction={HelloWorldAction} />
   </>
  );
}
