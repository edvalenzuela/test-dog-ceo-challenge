import { ClipLoader } from 'react-spinners';

export const Loading = ({message = ''}) => {
    return (
        <div className="flex flex-wrap items-center justify-around sm:w-1/5 md:w-1/4 bg-yellow-500 m-auto p-2 rounded-lg cursor-wait shadow">
            <ClipLoader size={50} color="white" />
            <p className="text-white text-base mt-4 self-start">{message}</p>
        </div>
    )
}