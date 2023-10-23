import { Dimensions } from 'react-native';


export const windowHeight = Dimensions.get('window').height;
export const windowWidth = Dimensions.get('window').width;


export function checkEmail(email) {

    //var email = document.getElementById('txtEmail');
    var filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;

    if (!filter.test(email)) {
   //// alert('Please provide a valid email address');
   // email.focus;
    return false;
 }
}

export function checkPassword(password) {
    const passwordRegex = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

    // Replace 'passwordToValidate' with the actual password you want to validate
    //const passwordToValidate = "YourPassword123$";

    if (!passwordRegex.test(password)) {
        return false;
    }
}


{/* <FlatList
                data={networks}
                renderItem={({item: service}) => (
                    <Pressable
                        key={service.id}
                        onPress={() => setNetworkProvider(service.name)}
                        style={[styles.network, NetworkProvider === service.name && { borderWidth: 1, borderColor: '#000000'}]}
                    >
                        <Image source={service.image} style={styles.networkImage}/>
                    </Pressable>
                    
                )}
                keyExtractor={service => service.id.toString()}
                horizontal={true}
            /> */}