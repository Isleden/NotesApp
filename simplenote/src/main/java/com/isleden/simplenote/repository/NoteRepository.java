package com.isleden.simplenote.repository;

import com.isleden.simplenote.model.Note;
import org.springframework.data.jpa.repository.JpaRepository;
import java.util.UUID;

public interface NoteRepository extends JpaRepository<Note, UUID> {
}