import PropTypes from "prop-types";
import {
    FriendUl,
    FriendLi,
    StatusLine,
    Avatar,
    Name,
} from './FriendList.styled';

export const FriendList = ({friendList}) => {
    return(
        <FriendUl>
            {friendList.map(({ avatar, name, isOnline, id }) =>(
                        <FriendLi key={id}>
                            <StatusLine status={isOnline ? 'Online' : 'Offline'}></StatusLine>
                            <Avatar src={avatar} alt={name} width="48" />
                            <Name> {name}</Name>
                        </FriendLi>
                    )
                )
            }
        </FriendUl> 
    );
};


FriendList.propTypes = {
    friendList: PropTypes.arrayOf(
        PropTypes.shape({
        avatar: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        isOnline: PropTypes.bool.isRequired,
        id: PropTypes.number.isRequired,
        })
    ),
}; 
