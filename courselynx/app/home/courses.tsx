import { View, StyleSheet, ScrollView } from "react-native"
import { GestureHandlerRootView } from "react-native-gesture-handler";
import CourseCard from "@/components/HomeComponents/CourseCard";

interface Course {
    id: number;
    name: string;
    code: string;
    professor: string;
    students: number;
    color: string;
}

const courses: Course[] = [
    {
        id: 1,
        name: "Digital Marketing",
        code : "DM101",
        professor : "Professor Name",
        students : 45,
        color : "#f97316",
    },
    {
        id: 2,
        name: "Business and Finance",
        code : "BF101",
        professor : "Professor Name",
        students : 187,
        color : "#f87171",
    },
    {
        id: 3,
        name: "Statistics",
        code : "STA101",
        professor : "Professor Name",
        students : 345,
        color: "#34d399",
    },
    {
        id: 4,
        name: "World History",
        code : "WH101",
        professor : "Professor Name",
        students : 28,
        color : "#facc15",
    },
    {
        id: 5,
        name: "English",
        code : "ENG101",
        professor : "Professor Name",
        students : 296,
        color : "#f472b6",
    },
]

export default function CoursesTab() {
    return (
        <GestureHandlerRootView style={{ flex: 1 }}>
            <View style={styles.container}>
                <ScrollView contentContainerStyle={styles.grid}>
                    {courses.map((course) => (
                        <CourseCard key={course.id} {...course}/>
                    ))}
                </ScrollView>
            </View>
        </GestureHandlerRootView>
    )
}

const styles = StyleSheet.create({
    container: { flex: 1, backgroundColor: "#fff" },
    grid: {
        flexDirection: "row",
        flexWrap: "wrap",
        justifyContent: "flex-start",
        padding: 10,
    },
});