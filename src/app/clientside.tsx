'use client'

type ClientComponentProps = {
   helloWorldAction: ()=> void 
}
export default (
    ({helloWorldAction}) => 
        <button onClick={helloWorldAction}>
            Say Hello
        </button>
) satisfies React.FC<ClientComponentProps>

