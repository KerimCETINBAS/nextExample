"use server"


export const LoginAction = async (form: FormData) => {
    const { email, password } = Object.fromEntries(form)

    if (email != "jdoe@example.com" && password != "password") {
        throw new Response("Unauthorized", { status: 401 });
    }
} 