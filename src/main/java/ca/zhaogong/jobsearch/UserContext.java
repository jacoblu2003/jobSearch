package ca.zhaogong.jobsearch;

import ca.zhaogong.jobsearch.entities.User;
import ca.zhaogong.jobsearch.utils.PasswordUtils;

import java.util.HashMap;
import java.util.Map;

public final class UserContext {
    private static Map<String, User> tokenUserMap = new HashMap<>();

    private static InheritableThreadLocal<String> sessionToken = new InheritableThreadLocal<>();

    public static User getCurrentUser() {
        if(sessionToken.get() == null) return null;
        return tokenUserMap.get(sessionToken.get());
    }

    public static void setToken(String token){
        sessionToken.set(token);
    }

    public static String createSession(User user) {
        String token = PasswordUtils.generateSalt();
        tokenUserMap.put(token, user);
        return token;
    }

    public static void invalidateSession() {
        if(sessionToken.get() != null)
            tokenUserMap.remove(sessionToken.get());
    }
}
