import { Alert, Image, Text, TextInput, TouchableOpacity, View } from "react-native"
import { icons } from '../constants'
import { router, usePathname} from 'expo-router'

const SearchInput = ({ initialQuery}) => {
   const pathname = usePathname();
   const [query, setQuery] = useState(initialQuery || '');

  return (
    
     
      <View className="border-2 border-black-200 w-full h-16 px-4 bg-black-100 rounded-2xl focus:border-secondary items-center flex-row">
        <TextInput
        className='text-base flex-1 text-white font-pregular '
        value={query}
        placeholder='Search for a video topic'
        placeholderTextColor="#cdcde0"
        onChangeText={(e) => setQuery(e)}
       
        />
       <TouchableOpacity
       onPress={() => {
        if(!query) {
          return Alert.alert('Missing input', 'Please type in something to search results across database')
        } 
        if(pathname.startsWith('/search')) router.setParams({ query })
        else router.push(`/search/${query}`)
       }}
       >
          <Image 
          source={icons.search}
          className="w-5 h-5"
          resizeMode='contain'
          />
        </TouchableOpacity>
      </View>
      
   
  )
}

export default SearchInput