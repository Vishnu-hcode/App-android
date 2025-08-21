import React, { useState } from "react";
import { View, Text,TextInput, FlatList, TouchableOpacity, ScrollView } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";

const faqs = [
  {
    category: "General Query",
    questions: [
      {
        q: "Can we change the Mobile Number and Email Id?",
        a: "Since the login depends on the student's Phone Number so it cannot be changed. However, for the Email ID, only the spelling mistakes can be rectified NOT the whole Email ID.",
      },
      {
        q: "How can you change NEET PG to FMGE to vice-versa?",
        a: "To change NEET PG to FMGE or vice-versa, please contact support with your registered details.",
      },
      // {
      //   q: "Who all can change their course from NEETPG to FMGE to vice-versa?",
      //   a: "Students who are eligible for both exams can request a change after approval.",
      // },
      {
        q: "How many times can we change the course?",
        a: "Course change can be requested only once.",
      },
    ],
  },
  {
    category: "Mission Plans Query",
    questions: [
      { q: "What are Mission Plans?", a: "Mission Plans are structured study plans to help students." },
    ],
  },
  {
    category: "Online BTR Plan Query",
    questions: [
      { q: "What is BTR Plan?", a: "The BTR Plan is an online-based structured revision plan." },
    ],
  },
  {
    category: "INICET Exam & Discussion Plan Enquiry",
    questions: [
      { q: "How to join INICET Exam Plan?", a: "You can join the INICET plan through the app settings." },
    ],
  },
];

export default function FAQScreen() {
  const [expandedCategory, setExpandedCategory] = useState<string | null>(null);
  const [expandedQuestion, setExpandedQuestion] = useState<string | null>(null);
  const [searchText, setSearchText] = useState("");

  const toggleCategory = (category: string) => {
    setExpandedCategory(expandedCategory === category ? null : category);
    setExpandedQuestion(null); // reset question when category closes
  };

  const toggleQuestion = (q: string) => {
    setExpandedQuestion(expandedQuestion === q ? null : q);
  };

  return (
    <ScrollView className="flex-1 bg-white px-4 py-6">
      {/* <View className="flex-row items-center mb-6">
        <Icon name="arrow-back" size={22} color="#000" />
        <Text className="text-xl font-bold ml-4">FAQs</Text>
        <Icon name="help-circle-outline" size={22} color="#1a73e8" style={{ marginLeft: "auto" }} />
      </View> */}
      {/* 🔍 Search Bar */}
      <View className="flex-row items-center border border-gray-300 rounded-xl px-3  mb-5 h-12">
        <Icon name="search-outline" size={20} color="#555" />
        <TextInput
          className="flex-1 ml-2 text-base"
          placeholder="Search FAQs"
          value={searchText}
          onChangeText={setSearchText}
        />
      </View>

      {faqs.map((section, idx) => (
        <View key={idx} className="mb-6">
          {/* Category Header */}
          <TouchableOpacity
            className="flex-row justify-between items-center py-3 border-b border-gray-200"
            onPress={() => toggleCategory(section.category)}
          >
            <Text className="text-xl font-semibold text-gray-800">{section.category}</Text>
            <Icon
              name={expandedCategory === section.category ? "chevron-up" : "chevron-down"}
              size={20}
              color="#555"
            />
          </TouchableOpacity>

          {/* Questions inside category */}
          {expandedCategory === section.category &&
            section.questions.map((item, qIdx) => (
              <View key={qIdx} className="ml-4 border-b border-gray-100">
                <TouchableOpacity
                  className="flex-row justify-between items-center py-3"
                  onPress={() => toggleQuestion(item.q)}
                >
                  <Text className="text-sm font-medium text-gray-700">{item.q}</Text>
                  <Icon
                    name={expandedQuestion === item.q ? "chevron-up" : "chevron-down"}
                    size={18}
                    color="#777"
                  />
                </TouchableOpacity>

                {expandedQuestion === item.q && (
                  <View className="bg-gray-50 p-3 rounded-lg mb-2">
                    <Text className="text-sm text-gray-600">{item.a}</Text>
                    <View className="flex-row items-center mt-3 justify-end">
                      <Text className="text-xs text-gray-500 mr-2">Was this helpful?</Text>
                      <Icon name="thumbs-up-outline" size={18} color="#555" style={{ marginRight: 8 }} />
                      <Icon name="thumbs-down-outline" size={18} color="#555" />
                    </View>
                  </View>
                )}
              </View>
            ))}
        </View>
      ))}
    </ScrollView>
  );
}
