package com.example.portfolio.controller;

import java.util.LinkedHashMap;
import java.util.List;
import java.util.Map;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api")
@CrossOrigin(origins = "http://localhost:5173")
public class ProfileController {

    @GetMapping("/profile")
    public Map<String, Object> getProfile() {
        Map<String, Object> profile = new LinkedHashMap<>();
        profile.put("name", "HARIPRASATH G");
        profile.put("title", "Junior Java Developer");
        profile.put("summary",
            "I am a passionate Java developer with strong skills in backend and frontend technologies, focused on building efficient, secure, and user-friendly web applications.");
        profile.put("email", "hariprasathh808@gmail.com");
        profile.put("phone", "902583100");
        profile.put("location", "India");
        profile.put("availability", "Open to junior Java developer roles");
        profile.put("education", "Bachelor of Computer Application");
        profile.put("githubUrl", "https://github.com/Hari1031");
        profile.put("resumeUrl", "/hariprasath-resume.pdf");
        profile.put("skills", List.of(
            "HTML",
            "CSS",
            "JavaScript",
            "React",
            "Java",
            "Spring",
            "MySQL",
            "MongoDB"
        ));
        profile.put("projects", List.of(
            Map.of(
                "name", "Online Book Store",
                "description",
                    "Developed a book store application using Java, JDBC, and MySQL for managing products, users, and order processing.",
                "stack", List.of("Java", "JDBC", "MySQL")
            ),
            Map.of(
                "name", "Bank Management System",
                "description",
                    "Designed a banking system using Java, HTML, CSS, JavaScript, and MySQL for account operations and customer management.",
                "stack", List.of("Java", "HTML", "CSS", "JavaScript", "MySQL")
            )
        ));
        profile.put("experience", List.of(
            Map.of(
                "role", "Java Developer",
                "company", "Self-Learning / Project Work",
                "period", "2024 - Present",
                "details",
                    "Built full-stack Java projects with backend logic, database integration, and responsive web interfaces."
            )
        ));
        profile.put("photoUrl",
            "https://1drv.ms/i/c/455c9abbd44d862a/IQAk3gYR0U4eQ7t3OcNSCfULAeIhEXTtaY1M6KPpPPPbT4k?e=OhPpfu");
        return profile;
    }
}
