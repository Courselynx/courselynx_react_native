import { View, Text, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";

interface Props {
    name: string;
    code: string;
    professor: string;
    students: number;
    color: string;
}

export default function CourseCard({ name, code, professor, students, color }: Props) {
    return (
        <View style={styles.card}>
            <View style={[styles.banner, { backgroundColor: color }]}>
                <View style={styles.studentsBadge}>
                    <Ionicons name="person-outline" size={14} color="#000000"/>
                    <Text style={styles.studentCount}>{students}</Text>
                </View>
            </View>
            <Text style={styles.courseName}>{name}</Text>
            <Text style={styles.classCode}>{code}</Text>
            <Text style={styles.professor}>{professor}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    card: {
        flexBasis: "45%",
        aspectRatio: 1,
        borderRadius: 10,
        backgroundColor: "#ffffff",
        padding: 12,
        marginHorizontal: 8,
        marginBottom: 8,
        borderColor: "#3b82f6",
        borderStyle: "solid",
        borderWidth: 0.2,
        shadowColor: "#000000",
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 3,
    },
    banner: {
        height: 80,
        borderRadius: 12,
        marginBottom: 8,
        justifyContent: "flex-start",
        alignItems: "flex-end",
        padding: 6,
    },
    studentsBadge: {
        flexDirection: "row",
        backgroundColor: "rgba(255, 255, 255, 0.5)",
        paddingHorizontal: 6,
        paddingVertical: 2,
        borderRadius: 12,
        alignItems: "center",
    },
    studentCount: {
        marginLeft: 4,
        fontSize: 12,
    },
    courseName: {
        color: "#02102E",
        fontSize: 14,
        fontWeight: "600",
        marginBottom: 6,
    },
    classCode: {
        color: "#02102E",
        fontSize: 12,
        marginBottom: 6,
    },
    professor: {
        color: "#02102E",
        fontSize: 12,
    },
});