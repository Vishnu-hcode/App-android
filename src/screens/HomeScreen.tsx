import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";

const subscriptions = [
  { id: 1, title: "Mission NEETPG Premium", validity: "27 Mar 2025 - 25 Jun 2025" },
  { id: 2, title: "AIIMS Super Speciality", validity: "01 Apr 2025 - 30 Jun 2025" },
  { id: 3, title: "FMGE Crash Course", validity: "15 Apr 2025 - 15 Jul 2025" },
  { id: 4, title: "Test Series Pack", validity: "10 May 2025 - 10 Aug 2025" },
];

const options = [
  { id: 1, title: "Explore More Plans", icon: "sparkles-outline" },
  { id: 2, title: "Buy Notes", icon: "document-text-outline" },
  { id: 3, title: "FAQs", icon: "chatbubble-ellipses-outline" }
];


export default function HomeScreen({ navigation }: { navigation: any }) {
  return (
    <ScrollView style={styles.container}>
      {/* Header */}
      {/* <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Icon name="arrow-back" size={24} color="#000" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Home</Text>
        <Icon name="notifications-outline" size={24} color="#000" />
      </View> */}

     {/* Profile Card */}
<View style={styles.profileCard}>
  {/* Profile Image - floating half above */}
  <Image
    source={require("../assets/Profile.png")}
    style={styles.profileImage}
  />

  {/* Info Section */}
  <View style={styles.profileInfo}>
  {/* Left side */}
  <View>
    <Text style={styles.profileName}>Prakash Sharma</Text>
    <View style={{ flexDirection: "row", alignItems: "center" }}>
      <Text style={styles.profileSub}>NEETPG - Second Year</Text>
    </View>
  </View>

  {/* Right side */}
  <TouchableOpacity 
  style={styles.editWrapper}
  onPress={()=> navigation.navigate("Profile")}>
    <Text style={styles.editProfile}>Edit Profile</Text>
  </TouchableOpacity>
</View>


  {/* Badge */}
  <View style={styles.badge}>
  <Icon name="trophy-outline" size={18} color="#fff" style={{ marginBottom: 2 }} />
  <View style={{  }}>
    <Text style={styles.badgeText}>Top 10</Text>
    <Text style={styles.badgeText}>Percentile</Text>
  </View>
  
  {/* notch */}
  {/* <View style={styles.badgeNotch} /> */}
</View>

</View>


    <Text style={styles.sectionTitle}>Premium</Text>

<ScrollView
  horizontal
  showsHorizontalScrollIndicator={false}
  contentContainerStyle={{ paddingRight: 15 }}
>
  {subscriptions.map((item) => (
    <View key={item.id} style={styles.subscriptionCard}>
      <View style={styles.subscriptionHeader}>
        <Text style={styles.activeBadge}>Active Subscription</Text>
        <Icon name="chevron-forward-outline" size={18} color="#555" />
      </View>

      <View style={styles.subscriptionBody}>
        <View style={styles.iconWrapper}>
          <Icon name="snow-outline" size={24} color="#1a73e8" />
        </View>
        <View style={{ marginLeft: 10 }}>
          <Text style={styles.subscriptionTitle}>{item.title}</Text>
          <Text style={styles.subscriptionValidity}>
            Validity: {item.validity}
          </Text>
        </View>
      </View>
    </View> 
  ))}
</ScrollView>

<View style={styles.optionsSection}>
  {options.map((item) => (
    <TouchableOpacity
      key={item.id}
      style={styles.optionCard}
      onPress={() => {
        if (item.id === 3) {
          navigation.navigate("FaqForm"); // 👈 navigate to your FAQ screen
        } else if (item.id === 1) {
          navigation.navigate("Plans"); // example
        } else if (item.id === 2) {
          navigation.navigate("BuyNotes"); // example
        }
      }}
    >
      <View style={styles.optionLeft}>
        <Icon name={item.icon} size={22} color="#FF5722" />
        <Text style={styles.optionText}>{item.title}</Text>
      </View>
      <Icon name="chevron-forward-outline" size={20} color="#555" />
    </TouchableOpacity>
  ))}
</View>

    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 15,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 15,
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: "600",
  },
   profileCard: {
    backgroundColor: "#1a2a6c",  // dark blue gradient-like background
    borderRadius: 12,
    padding: 16,
    marginTop: 27,
    // marginLeft: 4,
    // marginRight: 4,
    marginBottom: 20,
    position: "relative",  // needed for absolute positioning inside
    height: 125, // fixed height for card
  },
  profileImage: {
    width: 70,
    height: 70,
    borderRadius: 16,
    position: "absolute",
    top: -35,   // push half above the container
    left: 16,   // some margin from left
    // borderWidth: 3,
    borderColor: "#fff",  // white border around image
  },
  profileInfo: {
  flexDirection: "row",
  justifyContent: "space-between",
  alignItems: "flex-end",  // ⬅️ aligns Edit Profile with the last text line
  marginTop: 50,
},

profileName: {
  fontSize: 16,
  fontWeight: "600",
  color: "#fff",
},

profileSub: {
  fontSize: 14,
  color: "#ddd",
},

editWrapper: {
  justifyContent: "flex-end", // push it down to align with course text
},

editProfile: {
  fontSize: 14,
  color: "#fff",
  // textDecorationLine: "underline",
},

 badge: {
  flexDirection: "row",
  backgroundColor: "#FF6B00",
  borderRadius: 6,
  paddingVertical: 6,
  paddingHorizontal: 10,
  alignItems: "center",
  position: "absolute",   // ⬅️ float inside parent
  top: -25,               // ⬅️ push slightly above card
  right: -11,             // ⬅️ push outside right edge
  width: 110,
  height: 50,
  justifyContent:"space-between"
  },
  badgeText: {
    color: "#fff",
    fontSize: 12,
    fontWeight: "600",
  },
  badgeNotch: {
    position: "absolute",
    right: -0,
    top: "150%",
    marginTop: -6,
    width: 0,
    height: 0,
    // Rotation: "45deg",  
    borderTopWidth: 6,
    borderBottomWidth: 6,
    borderLeftWidth: 6,
    borderStyle: "solid",
    backgroundColor: "transparent",
    borderTopColor: "transparent",
    borderBottomColor: "transparent",
    borderLeftColor: "#FF6B00", // same as badge background
  },

  sectionTitle: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 10,
  },
  subscriptionCard: {
  backgroundColor: "#f2f7ff",
  borderRadius: 12,
  padding: 15,
  marginRight: 12,
  borderWidth: 1,
  borderColor: "#d0e2ff",
  width: 315, // fixed width for horizontal scrolling
  height: 115,
},

subscriptionHeader: {
  flexDirection: "row",
  justifyContent: "space-between",
  alignItems: "center",
  marginBottom: 10,
},

activeBadge: {
  backgroundColor: "#e5f1ff",
  color: "#1a73e8",
  fontSize: 12,
  fontWeight: "600",
  paddingVertical: 4,
  paddingHorizontal: 10,
  borderRadius: 12,
},

subscriptionBody: {
  flexDirection: "row",
  alignItems: "center",
},

iconWrapper: {
  width: 40,
  height: 40,
  borderRadius: 10,
  backgroundColor: "#eaf3ff",
  justifyContent: "center",
  alignItems: "center",
},

subscriptionTitle: {
  fontSize: 15,
  fontWeight: "bold",
  marginBottom: 4,
},

subscriptionValidity: {
  fontSize: 13,
  color: "#555",
},

optionsSection: {
  marginTop: 10,
  marginLeft: 6,
  marginRight: 6,
},

optionCard: {
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "space-between",
  paddingVertical: 15,
  borderBottomWidth: 1,
  borderColor: "#eee",
},

optionLeft: {
  flexDirection: "row",
  alignItems: "center",
},

optionText: {
  marginLeft: 12,
  fontSize: 15,
  fontWeight: "500",
  color: "#374151", // dark gray
},


});
