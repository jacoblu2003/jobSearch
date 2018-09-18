package ca.zhaogong.jobsearch.filters;

import ca.zhaogong.jobsearch.UserContext;

import javax.servlet.*;
import javax.servlet.http.HttpServletRequest;
import java.io.IOException;

public class AuthFilter implements Filter {
    @Override
    public void init(FilterConfig filterConfig) throws ServletException {
    }

    @Override
    public void doFilter(
            ServletRequest request,
            ServletResponse response,
            FilterChain chain) throws IOException, ServletException {

        HttpServletRequest httpReq = (HttpServletRequest) request;
        String authToken = httpReq.getHeader("authToken");

        UserContext.setToken(authToken);
        chain.doFilter(request, response);
    }

    @Override
    public void destroy() {
    }
}
