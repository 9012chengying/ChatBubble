package website.repository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Repository;
import website.DTO.dataDTO;
import website.model.mapper;

import java.util.List;

@Repository
public class repoJDBC implements repo{
    private JdbcTemplate jdbcTemplate;

    @Autowired
    public repoJDBC(JdbcTemplate aTemplate) {
        jdbcTemplate = aTemplate;
    }

    @Override
    public List<dataDTO> getData() {
        return jdbcTemplate.query(
                "SELECT * FROM testTable;", new mapper());
    }
}
