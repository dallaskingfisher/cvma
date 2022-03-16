import { getSession } from 'next-auth/client';

function Members() {
    return (
        <section>
            <div><h1>Members Area</h1></div>
            <div>Member Info</div>
            <div>Doucuments</div>
            <div>admin pannel</div>
        </section>
    )
}



export async function getServerSideProps(context) {

    const session = await getSession( {req: context.req})

    if(!session) {
        return {
            redirect: { 
                destination: '/login',
                permanent: false,
            }
        };
    }
    return { props: {session}}
}

export default Members;