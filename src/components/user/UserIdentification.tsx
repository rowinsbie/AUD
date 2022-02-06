import {Image} from 'react-bootstrap';
import ProfileSample from '../../assets/images/profile-sample.jpg';
export default function UserIdentification()
{
    return (
        <div className='text-center'>
            <div className='mb-4 img-circle'>
                <Image src={ProfileSample} className='user-profile-picture'   fluid={true} width={500} />
            </div>
            <h4>Juan Dela Cruz</h4>
            <span className="text-medium-i">Assoc. President</span><br />
            <span >Sindalan Toda</span>
        </div>
    )
}